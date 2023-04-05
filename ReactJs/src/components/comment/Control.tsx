import React from "react";
import * as Antd from "antd";
import { Langs } from "lang";
interface CommentControlProps {
  langs: Langs;
  comment?: string;
  noTitle?: boolean;
  isCancel?: boolean;
  onCancel?(): void;
}

const CommentControl: React.FC<CommentControlProps> = ({
  langs,
  comment,
  noTitle,
  isCancel,
  onCancel,
}) => {
  const [commentText, setCommentText] = React.useState<string>(comment ?? "");

  return (
    <Antd.Card className="comment-control">
      {!noTitle && (
        <Antd.Space className="control-title">
          <Antd.Avatar src="/images/default-avatar.png" />
          <Antd.Typography.Title level={5}>Customer</Antd.Typography.Title>
        </Antd.Space>
      )}

      <Antd.Form className="control-wrap">
        <Antd.Form.Item className="wrap-item">
          <Antd.Input.TextArea
            rows={4}
            value={commentText}
            placeholder={langs?.common.form.placeholder.comment}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </Antd.Form.Item>

        <Antd.Form.Item className="wrap-item">
          <Antd.Row gutter={10} justify="end">
            {isCancel && (
              <Antd.Col>
                <Antd.Button onClick={onCancel}>
                  {langs?.common.form.action.cancel}
                </Antd.Button>
              </Antd.Col>
            )}
            <Antd.Col>
              <Antd.Button type="primary" disabled={commentText === ""}>
                {langs?.common.form.action.comment}
              </Antd.Button>
            </Antd.Col>
          </Antd.Row>
        </Antd.Form.Item>
      </Antd.Form>
    </Antd.Card>
  );
};

export default CommentControl;
