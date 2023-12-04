import React from "react";

export function Projectss() {
	const projects = [
		{
			id: 1,
			title: "Campus Minimarket",
			discription:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rem dignissimos voluptate voluptatem iste distinctio repudiandae at velit doloribus, quas molestiae vel ab saepe dolore qui harum deserunt asperiores!",
		},
		{
			id: 2,
			title: "Campus Minimarket",
			discription:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rem dignissimos voluptate voluptatem iste distinctio repudiandae at velit doloribus, quas molestiae vel ab saepe dolore qui harum deserunt asperiores!",
		},
		{
			id: 3,
			title: "Campus Minimarket",
			discription:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rem dignissimos voluptate voluptatem iste distinctio repudiandae at velit doloribus, quas molestiae vel ab saepe dolore qui harum deserunt asperiores!",
		},
		{
			id: 4,
			title: "Campus Minimarket",
			discription:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis rem dignissimos voluptate voluptatem iste distinctio repudiandae at velit doloribus, quas molestiae vel ab saepe dolore qui harum deserunt asperiores!",
		},
	];
	return projects.map(({ id, title, discription }) => (
		<section
			key={id}
			className="self-center w-auto h-auto px-5 pt-5 "
		>
			<div className="flex flex-col justify-center items-center p-4 py-8 m-auto text-white w-full md:max-w-[34rem] bg-sky-950 ">
				<h3 className="pb-2 m-2 mb-5 text-2xl font-extrabold border-b border-b-white">
					{title}
				</h3>
				<p>{discription}</p>
			</div>
		</section>
	));
}
