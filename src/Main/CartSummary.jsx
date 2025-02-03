// src/components/CartSummary.jsx
import PropTypes from "prop-types";
import { Typography } from "antd";

const { Text } = Typography;

const CartSummary = ({ summary }) => {
  const { subtotal, discount, discountType, discountAmount, grandtotal } =
    summary;

  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between">
        <Text>Subtotal</Text>
        <Text>${subtotal.toFixed(2)}</Text>
      </div>
      <div className="flex justify-between text-gray-500">
        <Text>
          Discount
          {discountAmount > 0 && (
            <Text className="text-xs ml-1">
              (
              {discountType === "percentage"
                ? `${discountAmount}%`
                : `$${discountAmount}`}
              )
            </Text>
          )}
        </Text>
        <Text>-${discount.toFixed(2)}</Text>
      </div>
      <div className="flex justify-between font-bold">
        <Text>Grand Total</Text>
        <Text>${grandtotal.toFixed(2)}</Text>
      </div>
    </div>
  );
};

CartSummary.propTypes = {
  summary: PropTypes.shape({
    subtotal: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    discountType: PropTypes.oneOf(["fixed", "percentage"]).isRequired,
    discountAmount: PropTypes.number.isRequired,
    grandtotal: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartSummary;
