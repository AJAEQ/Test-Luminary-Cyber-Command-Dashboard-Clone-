"use client";
import ConsistencyChainRoot from "./(components)/education/consistencyChainRoot";
import { CardDemo } from "./(components)/card/Modal";
import useModal from "./_zustand/hooks/useModal";
import { Bounce, ToastContainer } from "react-toastify";

export default function Page() {
  const openModal = useModal();
  const { isOpen } = openModal;

  return (
    <div className="relative">
      <ConsistencyChainRoot />
      <div
        className={`w-full md:w-[736px] bg-[#040E16]  absolute top-0 left-1/2 -translate-x-1/2 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <CardDemo />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
