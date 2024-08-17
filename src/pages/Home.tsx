import ItemCard from "../components/ItemCard";

function Home() {
  return (
    <div className="flex-fit w-full">
      <div className="w-full bg-red-600">
        <img className="w-full h-auto object-cover" src="https://placehold.co/1600x300" />
      </div>
      <div className="border-x-2 shadow-md px-36 mx-36">
        <section className="py-12 gap-48 columns-2">
          <div className="w-full">
            <img className="object-cover" src="https://placehold.co/400" />
          </div>
          <div className="w-full">
            <h2 className="text-2xl font-bold pb-4">Title</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur pellentesque venenatis
              odio fusce maximus tempor. Sem vitae lorem placerat sem dapibus elementum.
              Pellentesque iaculis diam porttitor class erat gravida lacus. Accumsan venenatis
              facilisi torquent nullam, mi blandit molestie. Dignissim nulla turpis mauris, magnis
              porttitor ad a. Morbi natoque tempus sapien metus fusce suspendisse risus litora. Nisi
              mattis pharetra ex dignissim dictum elementum. Parturient faucibus arcu tellus hac sem
              himenaeos. Himenaeos at porttitor tincidunt dui ultricies tristique platea est ipsum.
            </p>
          </div>
        </section>
        <section className="py-12 gap-48 columns-2">
          <div className="w-full">
            <h2 className="text-2xl font-bold pb-4">Title</h2>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur pellentesque venenatis
              odio fusce maximus tempor. Sem vitae lorem placerat sem dapibus elementum.
              Pellentesque iaculis diam porttitor class erat gravida lacus. Accumsan venenatis
              facilisi torquent nullam, mi blandit molestie. Dignissim nulla turpis mauris, magnis
              porttitor ad a. Morbi natoque tempus sapien metus fusce suspendisse risus litora. Nisi
              mattis pharetra ex dignissim dictum elementum. Parturient faucibus arcu tellus hac sem
              himenaeos. Himenaeos at porttitor tincidunt dui ultricies tristique platea est ipsum.
            </p>
          </div>
          <div className="w-full">
            <img className="object-cover" src="https://placehold.co/400" />
          </div>
        </section>
        <div className="py-12">
          <h1 className="text-lg font-bold">Top picks</h1>
          <div id="topPicks" className="flex p-4 gap-x-8 overflow-x-auto" onDragStart={() => console.log("ondrag enter")} onDragEnd={() => console.log("ondrag leave")}>
            {Array.from({ length: 10 }, (_, k) => k + 1).map((i) => (
              <ItemCard name={'item' + i} url="https://placehold.co/150" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
