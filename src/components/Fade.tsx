import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Fade = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "100% 0px -300px 0px" }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
