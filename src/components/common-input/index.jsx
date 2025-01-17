export default function CommonInput({ type, placeholder, name, value, onChange, className }) {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder || "Enter text"}
      name={name}
      value={value}
      onChange={onChange}
      className={
        className || "w-full block px-5 py-2 mt-2 text-black border rounded-lg"
      }
    />
  );
}
