const HoverLinks = ({ text }: { text: string }) => {
  return (
    <div className="hover-link">
      <span className="hover-in">
        {text}
        <div>{text}</div>
      </span>
    </div>
  );
};

export default HoverLinks;
