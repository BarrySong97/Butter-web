import { Button, Modal, Space } from "@douyinfe/semi-ui";
import { ModalReactProps } from "@douyinfe/semi-ui/lib/es/modal";
import  { FC } from "react";
import { useTranslation } from "react-i18next";
import { HabitDTO } from "../../../../api";
import { PhFileCsv } from "../../../../assets/icons/CSV";
import { BiFiletypeJson } from "../../../../assets/icons/Json";
import { exportToCsv, exportToJson } from "../../../../utils/export";
export interface ExportModalProps extends ModalReactProps {
  data?: HabitDTO[];
}
const ExportModal: FC<ExportModalProps> = ({ data, ...props }) => {
  const { t } = useTranslation();
  return (
    <Modal {...props} footer={[]}>
      <div className="flex justify-center items-center">
        <Space>
          <Button
            onClick={() => {
              exportToJson("habits.json", data);
            }}
            icon={<BiFiletypeJson />}
            size="large"
          >
            {t("exportModal.exportJson")}
          </Button>
          <Button
            onClick={() => {
              exportToCsv("habits.csv", data);
            }}
            icon={<PhFileCsv />}
            size="large"
            type="secondary"
          >
            {t("exportModal.exportCsv")}
          </Button>
        </Space>
      </div>
    </Modal>
  );
};

export default ExportModal;
