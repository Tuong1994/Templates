import React from "react";
import * as Antd from "antd";
import * as Components from "@/components";
import useLangStore from "@/store/LangStore";

interface RateProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Rate: React.FC<RateProps> = ({ isOpen, setIsOpen }) => {
  const langs = useLangStore((state) => state.langs);

  const [value, setValue] = React.useState<number>(0);

  const desc = [
    langs?.common.rate.terrible ?? "terrible",
    langs?.common.rate.bad ?? "bad",
    langs?.common.rate.normal ?? "normal",
    langs?.common.rate.good ?? "good",
    langs?.common.rate.wonderful ?? "wonderful",
  ];

  const initialValues = {
    fullName: "Nhâm Bổn Tường",
    phone: "0793229970",
    email: "tuongnb@gmail.com",
    note: "",
  };

  const getTagColors = () => {
    const colors: any = {
      1: "red",
      2: "volcano",
      3: "gold",
      4: "lime",
      5: "green",
    };
    return colors[value];
  };

  return (
    <Antd.Modal
      title={langs?.common.rate.title}
      closable={false}
      open={isOpen}
      okText={langs?.common.form.action.rate}
      cancelText={langs?.common.form.action.cancel}
      onCancel={() => setIsOpen(false)}
      className="rate"
    >
      <Antd.Divider
        orientationMargin={0}
        orientation="left"
        className="rate-subtitle"
      >
        {langs?.common.rate.subTitle_1}
      </Antd.Divider>

      <Antd.Card className="rate-star">
        <Antd.Rate tooltips={desc} allowClear onChange={(v) => setValue(v)} />
        <Antd.Row justify="center">
          <Antd.Col>
            {value > 0 && (
              <Antd.Tag className="star-tag" color={getTagColors()}>
                {desc[value - 1]}
              </Antd.Tag>
            )}
          </Antd.Col>
        </Antd.Row>
      </Antd.Card>

      <Antd.Divider orientationMargin={0} orientation="left">
        {langs?.common.rate.subTitle_2}
      </Antd.Divider>

      <Antd.Form
        layout="vertical"
        initialValues={initialValues}
        className="rate-form"
      >
        <Components.Fields.Input
          rootClassName="form-item"
          name="fullName"
          disabled
          label={langs?.common.form.label.fullName}
        />

        <Components.Fields.Input
          rootClassName="form-item"
          name="phone"
          disabled
          label={langs?.common.form.label.phone}
        />

        <Components.Fields.Input
          rootClassName="form-item"
          name="email"
          disabled
          label={langs?.common.form.label.email}
        />

        <Components.Fields.TextArea
          rootClassName="form-item"
          name="note"
          rows={4}
          label={langs?.common.form.label.note}
          placeholder={langs?.common.form.placeholder.note}
        />
      </Antd.Form>
    </Antd.Modal>
  );
};

export default Rate;
