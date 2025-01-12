// import Link from "next/link";




// interface Props {
//   title?: string;
//   className?: string;
// }

// const Logo = ({ title, className }: Props) => {
//   return (
//     <Link href={"/"}>
//       <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
//         {title || "AI FEATURES"}
//       </h1>
//     </Link>
//   );
// };

// export default Logo;
import Link from "next/link";

interface Props {
  title?: string; // Optional, but defaults to "AI FEATURES".
  className?: string; // Optional additional classes for styling.
}

const Logo = ({ title = "AI FEATURES", className = "" }: Props) => {
  return (
    <Link href={"/"} aria-label="Navigate to homepage">
      <h1 className={`text-3xl font-extrabold uppercase ${className}`}>
        {title}
      </h1>
    </Link>
  );
};

export default Logo;
