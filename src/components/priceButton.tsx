import { Box } from "@mantine/core";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiCheckboxBlankFill } from "react-icons/ri";

interface PriceButtonProps {
  price: number | string;
  isActive: boolean;
}

function addSpacesToNumber(number: number | string) {
  if (typeof number === "string") return number;
  const numStr = number.toString();
  const data = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  return `${data}`;
}

const PriceButton = ({ price, isActive }: PriceButtonProps) => {
  if (isActive) {
    return (
      <Box
        sx={{
          border: "2px solid #2E5BFF",
          borderRadius: "10px",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <RiCheckboxBlankFill
          style={{
            position: "absolute",
            color: "#fff",
            right: -10,
            top: -10,
            fontSize: "25px",
          }}
        />
        <AiFillCheckCircle
          style={{
            position: "absolute",
            color: "#2E5Bff",
            right: -10,
            top: -10,
            fontSize: "25px",
          }}
        />
        <Box
          sx={{
            border: "none",
          }}
        >
          {addSpacesToNumber(price) === "BOSHQA" ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "800",
              }}
            >
              {addSpacesToNumber(price)}
            </p>
          ) : (
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "800",
              }}
            >
              {addSpacesToNumber(price)}
              <span
                style={{
                  marginLeft: "8px",
                  color: "blue",
                  fontWeight: "200",
                  fontSize: "15px",
                }}
              >
                UZS
              </span>
            </p>
          )}
        </Box>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        cursor: "pointer",
        border: "2px solid #E0E7FF",
        borderRadius: "10px",
      }}
    >
      <Box style={{ textAlign: "center" }}>
        {addSpacesToNumber(price) === "BOSHQA" ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            {addSpacesToNumber(price)}
          </p>
        ) : (
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            {addSpacesToNumber(price)}
            <span
              style={{
                marginLeft: "8px",
                color: "blue",
                fontWeight: "200",
                fontSize: "15px",
              }}
            >
              UZS
            </span>
          </p>
        )}
      </Box>
    </Box>
  );
};

export default PriceButton;
