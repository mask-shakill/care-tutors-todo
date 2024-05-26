"use client";
import EditTodo from "@/components/EditTodo";

export default function Edit(props) {
  const id = props.id;
  console.log(id);

  if (!id) return null;

  return (
    <div className="container mx-auto p-4">
      <EditTodo id={id} />
    </div>
  );
}
