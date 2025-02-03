// src/components/CartItem.jsx
import PropTypes from "prop-types";
import { Badge, Avatar, Button, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { DEFAULT_PRODUCT_IMAGE } from "../constants/constants";
const { Text } = Typography;


const CartItem = ({ item, onRemove }) => {
  const { product_code, name, product_price, qty } = item;

  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center space-x-2">
        <Badge count={qty} className="bg-blue-500">
          <Avatar
            shape="square"
            size="large"
            src={item.image || DEFAULT_PRODUCT_IMAGE}
          />
        </Badge>
        <div>
          <Text className="font-medium">{name}</Text>
          <Text className="block text-gray-500 text-sm">
            ${product_price} × {qty}
          </Text>
        </div>
      </div>
      <div className="flex items-center">
        <Text className="font-medium mr-4">
          ${(qty * product_price).toFixed(2)}
        </Text>
        <Button
          type="text"
          danger
          icon={<DeleteOutlined />}
          onClick={() => onRemove(product_code)}
        />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    product_code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
