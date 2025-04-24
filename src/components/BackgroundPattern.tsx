
const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Light background with subtle dot pattern */}
      <div 
        className="absolute inset-0 bg-[#FDF6F1]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Very subtle glow effects */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-[#FDE1D3]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-[#D3E4FD]/20 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundPattern;
