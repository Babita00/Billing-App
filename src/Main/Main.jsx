import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { posAction } from "../actions/posActions";
import { format } from "date-fns";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { DEFAULT_PRODUCT_IMAGE, STORE_NAME } from "../constants/constants";
import DiscountModal from "./DiscountDialog";
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
  Divider,
  Space,
  Typography,
  Empty,
  message,
  Form,
} from "antd";

const { Title, Text } = Typography;

const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDiscountModalVisible, setIsDiscountModalVisible] = useState(false);
  const [discountForm] = Form.useForm();
  const [summary, setSummary] = useState({
    subtotal: 0,
    discount: 0,
    discountType: "fixed",
    discountAmount: 0,
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
      calculateSummary();
    } else {
      // Reset summary when cart is empty
      setSummary({
        subtotal: 0,
        discount: 0,
        discountType: "fixed",
        discountAmount: 0,
        grandtotal: 0,
        note: "",
      });
    }
  }, [cartItems]); // Updated dependency array to include cartItems

  const calculateSummary = (
    discountType = summary.discountType,
    discountAmount = summary.discountAmount
  ) => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.qty * item.product_price,
      0
    );

    let discount = 0;
    if (discountType === "percentage") {
      discount = (subtotal * discountAmount) / 100;
    } else {
      discount = discountAmount;
    }

    discount = Math.min(discount, subtotal);

    const grandtotal = subtotal - discount;
    setSummary({
      ...summary,
      subtotal,
      discount,
      discountType,
      discountAmount,
      grandtotal,
    });
  };

  const handleDiscountSubmit = (values) => {
    const { discountType, discountAmount } = values;
    calculateSummary(discountType, discountAmount);
    setIsDiscountModalVisible(false);
    message.success("Discount applied successfully");
  };

  const showDiscountModal = () => {
    discountForm.setFieldsValue({
      discountType: summary.discountType,
      discountAmount: summary.discountAmount,
    });
    setIsDiscountModalVisible(true);
  };

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
      discountType: "fixed",
      discountAmount: 0,
      grandtotal: 0,
      note: "",
    });
    message.info("Cart has been reset");
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
        {/* Cart Section */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <div className="mb-4">
              <Title level={4} className="text-center mb-1">
                {STORE_NAME}
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
              <Button
                icon={<PercentageOutlined />}
                block
                onClick={showDiscountModal}
              >
                Discount
              </Button>
            </div>

            <div className="h-96 overflow-y-auto mb-4">
              {cartItems.length === 0 ? (
                <Empty description="Cart is empty" />
              ) : (
                cartItems.map((item) => (
                  <CartItem
                    key={item.product_code}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))
              )}
            </div>

            <Divider />
            <CartSummary summary={summary} />

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
                    src={product.image || DEFAULT_PRODUCT_IMAGE}
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

        <DiscountModal
          isDiscountModalVisible={isDiscountModalVisible}
          handleDiscountSubmit={handleDiscountSubmit}
          discountForm={discountForm}
          onCancel={() => setIsDiscountModalVisible(false)}
        />
      </div>
    </div>
  );
};

export default Main;
