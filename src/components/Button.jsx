export default function Button({ btnclass, children, ...props }) {
  return (
    <button className={btnclass} {...props}>
      {children}
    </button>
  );
}
