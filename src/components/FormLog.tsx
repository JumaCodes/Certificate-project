import { PostProps } from "../types/component-types";

export default function FormLog({ type, message }: { type: string, message : any }) {
  return (
    <div>
      {type === "error" ? (
        <div style={style_logError}>
          <p>{message}</p>
        </div>
      ) : (
        <div style={style_logSuccess}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

const style_logError: React.CSSProperties = {
  padding: "10px",
  fontWeight: "bold",
  backgroundColor: "#e45d5d",
  color: "#461919",
};
const style_logSuccess: React.CSSProperties = {
  padding: "10px",
  fontWeight: "bold",
  backgroundColor: "#8fb98f",
};
