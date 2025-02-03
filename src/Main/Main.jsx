import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { posAction } from "../actions/posActions";
import { format } from "date-fns";
import {
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  SearchOutlined,
  FileTextOutlined,
  PercentageOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import {
  Input,
  Button,
  Card,
  Badge,
  Divider,
  Space,
  Typography,
  Avatar,
  Empty,
  message,
} from "antd";

const { Title, Text } = Typography;

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [summary, setSummary] = useState({
    subtotal: 0,
    discount: 0,
    grandtotal: 0,
    note: "",
  });

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(posAction());
  }, [dispatch]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const subtotal = cartItems.reduce(
        (acc, item) => acc + item.qty * item.product_price,
        0
      );
      const discount = 0;
      const grandtotal = subtotal - discount;
      setSummary({ subtotal, discount, grandtotal, note: "" });
    }
  }, [cartItems]);

  const onClickProduct = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.product_code === item.product_code
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.product_code === item.product_code
            ? { ...cartItem, qty: cartItem.qty + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, qty: 1 }];
    });
    message.success("Product added to cart");
  };

  const removeFromCart = (productCode) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product_code !== productCode)
    );
    message.success("Product removed from cart");
  };

  const resetCart = () => {
    setCartItems([]);
    setSummary({
      subtotal: 0,
      discount: 0,
      grandtotal: 0,
      note: "",
    });
    message.info("Cart has been reset");
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const CartItem = ({ item }) => (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center space-x-2">
        <Badge count={item.qty} className="bg-blue-500">
          <Avatar shape="square" size="large" src="/api/placeholder/48/48" />
        </Badge>
        <div>
          <Text className="font-medium">{item.name}</Text>
          <Text className="block text-gray-500 text-sm">
            ${item.product_price} × {item.qty}
          </Text>
        </div>
      </div>
      <div className="flex items-center">
        <Text className="font-medium mr-4">
          ${(item.qty * item.product_price).toFixed(2)}
        </Text>
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => removeFromCart(item.product_code)}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {/* Cart Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <div className="mb-4">
              <Title level={4} className="text-center mb-1">
                NEPKODER STORE
              </Title>
              <Text className="block text-center text-gray-500">
                {format(new Date(), "yyyy-MM-dd hh:mm a")}
              </Text>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <Button icon={<UserOutlined />} block>
                Customer
              </Button>
              <Button icon={<FileTextOutlined />} block>
                Note
              </Button>
              <Button icon={<PercentageOutlined />} block>
                Discount
              </Button>
            </div>

            <Divider />

            <div className="h-96 overflow-y-auto mb-4">
              {cartItems.length === 0 ? (
                <Empty description="Cart is empty" />
              ) : (
                cartItems.map((item) => (
                  <CartItem key={item.product_code} item={item} />
                ))
              )}
            </div>

            <Divider />

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <Text>Subtotal</Text>
                <Text>${summary.subtotal.toFixed(2)}</Text>
              </div>
              <div className="flex justify-between text-gray-500">
                <Text>Discount</Text>
                <Text>-${summary.discount.toFixed(2)}</Text>
              </div>
              <div className="flex justify-between font-bold">
                <Text>Grand Total</Text>
                <Text>${summary.grandtotal.toFixed(2)}</Text>
              </div>
            </div>

            <Space className="w-full">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={resetCart}
                block
              >
                Reset Cart
              </Button>
              <Button type="primary" icon={<ShoppingCartOutlined />} block>
                Pay Now
              </Button>
            </Space>
          </Card>
        </div>

        {/* Products Section */}
        <div className="lg:col-span-3">
          <Card className="mb-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <Title level={5} className="mb-0">
                All Products
              </Title>
              <Input
                placeholder="Search products..."
                prefix={<SearchOutlined />}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
              <Space>
                <Text>User: Sujan</Text>
                <Button icon={<LogoutOutlined />}>Logout</Button>
              </Space>
            </div>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts?.map((product) => (
              <Card
                key={product.product_code}
                hoverable
                cover={
                  <img
                    alt={product.name}
                    src="/api/placeholder/200/200"
                    className="object-cover h-48"
                  />
                }
                onClick={() => onClickProduct(product)}
                className="cursor-pointer"
              >
                <Card.Meta
                  title={product.name}
                  description={`$${product.product_price}`}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
