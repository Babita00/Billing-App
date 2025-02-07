import { Modal, Form, Input, Button, Space } from "antd";
import PropTypes from "prop-types";
const NoteModal = ({ isVisible, onCancel, onSubmit, initialValue }) => {
  const [form] = Form.useForm();

  return (
    <Modal title="Add Note" open={isVisible} onCancel={onCancel} footer={null}>
      <Form
        form={form}
        onFinish={(values) => {
          onSubmit(values.note);
          form.resetFields();
        }}
        initialValues={{ note: initialValue }}
        layout="vertical"
      >
        <Form.Item
          name="note"
          label="Order Note"
          rules={[{ required: true, message: "Please enter a note" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter order note here..." />
        </Form.Item>

        <Form.Item className="flex justify-end mb-0">
          <Space>
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Save Note
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};
// Define PropTypes
NoteModal.propTypes = {
  isDiscountModalVisible: PropTypes.bool.isRequired,
  isVisible: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialValue: PropTypes.object.isRequired,
};
export default NoteModal;
