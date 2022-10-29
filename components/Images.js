import Svg, { Circle, Ellipse, Path, Rect } from "react-native-svg";

("Мафия");
("Мирный");
("Маньяк");
("Доктор");
("Бабочка");

const IconMafia = ({ name }) => {
  const data = {
    Мафия: (
      <Svg
        width="127"
        height="83"
        viewBox="0 0 127 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M104.482 41.5C104.482 30.4935 100.11 19.9378 92.3273 12.1551C84.5445 4.37231 73.9888 8.30967e-07 62.9823 0C51.9759 -8.30966e-07 41.4202 4.37231 33.6374 12.1551C25.8546 19.9378 21.4823 30.4935 21.4823 41.5L62.9823 41.5H104.482Z"
          fill="#413535"
        />
        <Path
          d="M126.941 45.4059C126.941 51.7508 120.254 57.8358 108.351 62.3224C96.448 66.8089 80.304 69.3294 63.4706 69.3294C46.6371 69.3294 30.4932 66.8089 18.5901 62.3224C6.68706 57.8358 2.54178e-06 51.7508 0 45.4059L63.4706 45.4059H126.941Z"
          fill="#413535"
        />
      </Svg>
    ),
    Мирный: (
      <Svg
        width="33"
        height="86"
        viewBox="0 0 33 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M1.13793 70H31.8621L33 86H19.4871L16.3578 78.605L13.2284 86H0L1.13793 70Z"
          fill="#413535"
        />
        <Rect x="1" y="35" width="31" height="33" fill="#413535" />
        <Circle cx="16" cy="16" r="16" fill="#413535" />
      </Svg>
    ),
    Маньяк: (
      <Svg
        width="81"
        height="95"
        viewBox="0 0 81 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Ellipse cx="40.5" cy="47.5" rx="40.5" ry="47.5" fill="#413535" />
        <Circle cx="27" cy="37" r="8" fill="#FCFBFB" />
        <Circle cx="54" cy="37" r="8" fill="#FCFBFB" />
        <Circle cx="27" cy="37" r="3" fill="#FF5656" />
        <Circle cx="54" cy="37" r="3" fill="#FF5656" />
        <Circle cx="10" cy="54" r="2" fill="#FFF5EC" />
        <Circle cx="71" cy="54" r="2" fill="#FFF5EC" />
        <Circle cx="18" cy="64" r="5" fill="#FFF5EC" />
        <Circle r="3" transform="matrix(1 0 0 -1 18 77)" fill="#FFF5EC" />
        <Circle r="2" transform="matrix(1 0 0 -1 8 68)" fill="#FFF5EC" />
        <Circle r="2" transform="matrix(1 0 0 -1 73 68)" fill="#FFF5EC" />
        <Circle r="5" transform="matrix(-1 0 0 1 63 64)" fill="#FFF5EC" />
        <Circle
          cx="63"
          cy="77"
          r="3"
          transform="rotate(-180 63 77)"
          fill="#FFF5EC"
        />
      </Svg>
    ),
    Доктор: (
      <Svg
        width="91"
        height="91"
        viewBox="0 0 91 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M14.5161 83.7419C14.5161 87.7505 11.2666 91 7.25806 91C3.24955 91 0 87.7505 0 83.7419C0 79.7334 3.24955 76.4839 7.25806 76.4839C11.2666 76.4839 14.5161 79.7334 14.5161 83.7419ZM1.95825 83.7419C1.95825 86.6689 4.33106 89.0418 7.25806 89.0418C10.1851 89.0418 12.5579 86.6689 12.5579 83.7419C12.5579 80.8149 10.1851 78.4421 7.25806 78.4421C4.33106 78.4421 1.95825 80.8149 1.95825 83.7419Z"
          fill="black"
        />
        <Path
          d="M11.8624 79.1376L28.0796 62.9204"
          stroke="black"
          stroke-width="2"
        />
        <Path
          d="M14.811 49.6517L41.3483 76.189"
          stroke="black"
          stroke-width="1.5"
        />
        <Rect
          x="59.0508"
          y="16.9946"
          width="21.0262"
          height="52.1369"
          transform="rotate(45 59.0508 16.9946)"
          stroke="black"
          stroke-width="1.5"
        />
        <Path
          d="M59 14L60.4743 15.4743L77.4229 32.4229V28L63.4229 14H59Z"
          stroke="black"
          stroke-width="1.5"
        />
        <Path d="M70 20.9486L72.9486 18" stroke="black" stroke-width="2" />
        <Path d="M70 21L90 1" stroke="black" />
        <Path d="M26.5827 49.629L31.0282 54.0746" stroke="black" />
        <Path d="M32.5706 43.8226L36.9254 48.1774" stroke="black" />
        <Path d="M38.4677 37.9254L42.8226 42.2802" stroke="black" />
        <Path d="M44.2742 31.9375L48.7198 36.3831" stroke="black" />
        <Path d="M50.0806 25.9496L54.6169 30.4859" stroke="black" />
      </Svg>
    ),
    Бабочка: (
      <Svg
        width="95"
        height="92"
        viewBox="0 0 95 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M47 34.7716L-1.80965e-06 92L12.2923 34.7716L5.78461 3.31975e-09L47 34.7716Z"
          fill="#730C7C"
        />
        <Path
          d="M47 34.7716L95 92L82.4462 34.7716L89.0923 -3.50118e-08L47 34.7716Z"
          fill="#730C7C"
        />
      </Svg>
    ),
    Шериф: (
      <Svg
        width="103"
        height="105"
        viewBox="0 0 103 105"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg"
      >
        <Path
          d="M51.5 4L68.1226 31.621L99.5284 38.8946L78.3959 63.239L81.1832 95.3554L51.5 82.78L21.8168 95.3554L24.6041 63.239L3.47165 38.8946L34.8774 31.621L51.5 4Z"
          fill="#413535"
        />
        <Path
          d="M51.5 21L60.7547 41.762L83.3604 44.1479L66.4744 59.3655L71.1908 81.6021L51.5 70.245L31.8092 81.6021L36.5256 59.3655L19.6396 44.1479L42.2453 41.762L51.5 21Z"
          fill="white"
        />
        <Circle cx="51.5" cy="3.5" r="3.5" fill="#413535" />
        <Circle cx="99.5" cy="39.5" r="3.5" fill="#413535" />
        <Circle cx="3.5" cy="39.5" r="3.5" fill="#413535" />
        <Circle cx="81.5" cy="95.5" r="3.5" fill="#413535" />
        <Circle cx="21.5" cy="95.5" r="3.5" fill="#413535" />
      </Svg>
    ),
  };
  return data[name];
};

export default IconMafia;
