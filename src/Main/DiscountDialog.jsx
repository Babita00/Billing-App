import { Button, Space, Modal, Form, Radio, InputNumber } from "antd";
import PropTypes from "prop-types";
const DiscountModal = ({
  isDiscountModalVisible,
  handleDiscountSubmit,
  discountForm,
  onCancel,
}) => {
  return (
    <Modal
      title="Apply Discount"
      open={isDiscountModalVisible}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        form={discountForm}
        onFinish={handleDiscountSubmit}
        initialValues={{
          discountType: "fixed",
          discountAmount: 0,
        }}
        layout="vertical"
      >
        <Form.Item name="discountType" label="Discount Type">
          <Radio.Group>
            <Radio value="fixed">Fixed Amount ($)</Radio>
            <Radio value="percentage">Percentage (%)</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="discountAmount"
          label="Discount Amount"
          rules={[
            { required: true, message: "Please enter discount amount" },
            { type: "number", min: 0, message: "Amount must be positive" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (
                  getFieldValue("discountType") === "percentage" &&
                  value > 100
                ) {
                  return Promise.reject("Percentage cannot exceed 100%");
                }
                return Promise.resolve();
              },
            }),
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Enter discount amount"
            precision={2}
          />
        </Form.Item>

        <Form.Item className="flex justify-end mb-0">
          <Space>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Apply Discount
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};

// Define PropTypes
DiscountModal.propTypes = {
  isDiscountModalVisible: PropTypes.bool.isRequired,
  handleDiscountSubmit: PropTypes.func.isRequired,
  discountForm: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default DiscountModal;
