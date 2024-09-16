const DishCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2 "
        loading="lazy" // Lazy load the image
        srcSet={`${project.image}?w=300 300w, ${project.image}?w=600 600w, ${project.image}?w=900 900w`} // Responsive images
        sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px" // Provide image sizes for different breakpoints
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default DishCard;
