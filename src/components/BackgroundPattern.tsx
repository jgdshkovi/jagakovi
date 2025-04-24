
const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Light background with subtle dot pattern */}
      <div 
        className="absolute inset-0 bg-[#F1F0FB]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(145, 134, 245, 0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Soft glow effects */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundPattern;
