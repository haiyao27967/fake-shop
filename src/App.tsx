import Logo from "./assets/fake-logo.svg"
import {
  MdSearch,
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineAccountCircle,
} from "react-icons/md";
import { FaYoutube, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const categories = [
  "New",
  "Women",
  "Men",
  "Kids",
  "Baby",
  "Home",
  "Toys",
  "Gifts",
  "Sale",
];

function ItemCard({ name, url }: { name: string; url: string }) {
  return (
    <div className="p-4 shadow-lg rounded min-w-fit">
      <img src={url} />
      <h1>{name}</h1>
      <p>price</p>
      <p>rating</p>
    </div>
  );
}

function Topbar() {
  return (
    <header className="shadow">
      <div className="flex justify-between">
        <div>
          <img src={Logo} width={100} height={40} />
        </div>
        <div className="w-auto content-center">
          <form className="flex border-2 border-slate-400 focus-within:border-slate-800 rounded-full pl-4 py-2">
            <input
              type="search"
              className="outline-none"
              placeholder="Search goods..."
            />
            <button
              className="px-2 text-slate-400 hover:text-slate-600 active:text-slate-800"
              type="submit"
            >
              <MdSearch size={32} />
            </button>
          </form>
        </div>

        <div className="content-center w-fit px-4">
          <button className="mx-4 text-slate-400 hover:text-slate-600 active:text-slate-800 hover:scale-110">
            <MdFavoriteBorder size={48} />
          </button>
          <button className="mx-4 text-slate-400 hover:text-slate-800 active:text-slate-800 hover:scale-110">
            <MdOutlineShoppingCart size={48} />
          </button>
          <button className="mx-4 text-slate-400 hover:text-slate-800 active:text-slate-800 hover:scale-110">
            <MdOutlineAccountCircle size={48} />
          </button>
        </div>
      </div>
      <div className="flex justify-between px-48 pb-2">
        {categories.map((i) => (
          <div className="font-bold hover:scale-110 cursor-pointer">{i}</div>
        ))}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-300 flex">
      <div className="flex w-1/4 p-12 flex-col">
        <img src={Logo} width={120} height={60} />
        <div className="flex gap-2">
          <FaYoutube size={24} />
          <FaInstagram size={24} />
          <FaXTwitter size={24} />
          <FaFacebookSquare size={24}/>
        </div>
      </div>
      <div className="flex w-1/4 p-12 flex-col gap-4">
        <h4 className="font-semibold pb-2">Shopping</h4>
        {[
          "Track My Order",
          "Payment Options",
          "Delivery and Click & Collect",
          "Returns & Exchanges",
        ].map((i) => (
          <p>{i}</p>
        ))}
      </div>
      <div className="flex w-1/4 p-12 flex-col gap-4">
        <h4 className="font-semibold pb-2">Customer service</h4>
        {[
          "FAQs",
          "Contact Us",
          "Store Locator",
          "Experiences & Services",
          "Sales & Promotions",
        ].map((i) => (
          <p>{i}</p>
        ))}
      </div>
      <div className="flex w-1/4 p-12 flex-col gap-4">
        <h4 className="font-semibold pb-2">About Fake</h4>
        {["About us", "Careers", "Sustainability"].map((i) => (
          <p>{i}</p>
        ))}
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col">
      <Topbar />
      <div className="flex-fit">
        <div className="w-full">
          <img className="object-cover" src="https://placehold.co/1600x400" />
        </div>
        <div className="shadow-2xl px-36 mx-36">
          <section className="py-12 gap-48 columns-2">
            <div className="w-full">
              <img className="object-cover" src="https://placehold.co/400" />
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold pb-4">Title</h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur
                pellentesque venenatis odio fusce maximus tempor. Sem vitae
                lorem placerat sem dapibus elementum. Pellentesque iaculis diam
                porttitor class erat gravida lacus. Accumsan venenatis facilisi
                torquent nullam, mi blandit molestie. Dignissim nulla turpis
                mauris, magnis porttitor ad a. Morbi natoque tempus sapien metus
                fusce suspendisse risus litora. Nisi mattis pharetra ex
                dignissim dictum elementum. Parturient faucibus arcu tellus hac
                sem himenaeos. Himenaeos at porttitor tincidunt dui ultricies
                tristique platea est ipsum.
              </p>
            </div>
          </section>
          <section className="py-12 gap-48 columns-2">
            <div className="w-full">
              <h2 className="text-2xl font-bold pb-4">Title</h2>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur
                pellentesque venenatis odio fusce maximus tempor. Sem vitae
                lorem placerat sem dapibus elementum. Pellentesque iaculis diam
                porttitor class erat gravida lacus. Accumsan venenatis facilisi
                torquent nullam, mi blandit molestie. Dignissim nulla turpis
                mauris, magnis porttitor ad a. Morbi natoque tempus sapien metus
                fusce suspendisse risus litora. Nisi mattis pharetra ex
                dignissim dictum elementum. Parturient faucibus arcu tellus hac
                sem himenaeos. Himenaeos at porttitor tincidunt dui ultricies
                tristique platea est ipsum.
              </p>
            </div>
            <div className="w-full">
              <img className="object-cover" src="https://placehold.co/400" />
            </div>
          </section>
          <div className="py-12">
            <h1 className="text-lg font-bold">Top picks</h1>
            <div className="flex p-4 gap-x-8 overflow-x-auto">
              {Array.from({ length: 10 }, (_, k) => k + 1).map((i) => (
                <ItemCard name={"item" + i} url="https://placehold.co/150" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
