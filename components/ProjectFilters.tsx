interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function FilterButton({ 
  isActive, 
  onClick, 
  children, 
  variant = 'primary' 
}: FilterButtonProps) {
  const baseClasses = "px-4 py-2 text-sm rounded-lg border transition-all duration-200";
  const primaryClasses = isActive
    ? "bg-cyan-400 text-zinc-900 border-cyan-400"
    : "bg-zinc-900/50 text-gray-400 border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50";
  
  const secondaryClasses = isActive
    ? "bg-zinc-700 text-white border-zinc-600"
    : "bg-zinc-900/50 text-gray-500 border-zinc-800/50 hover:bg-zinc-800/50";

  const classes = variant === 'primary' ? primaryClasses : secondaryClasses;

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${classes}`}
    >
      {children}
    </button>
  );
}

interface CategoryFilterProps {
  categories: { id: string; label: string }[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          isActive={selectedCategory === category.id}
          onClick={() => onCategoryChange(category.id)}
          variant="primary"
        >
          {category.label}
        </FilterButton>
      ))}
    </div>
  );
}

interface TechnologyFilterProps {
  technologies: string[];
  selectedTechnology: string | null;
  onTechnologyChange: (technology: string | null) => void;
  maxVisible?: number;
}

export function TechnologyFilter({ 
  technologies, 
  selectedTechnology, 
  onTechnologyChange,
  maxVisible = 8
}: TechnologyFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <FilterButton
        isActive={!selectedTechnology}
        onClick={() => onTechnologyChange(null)}
        variant="secondary"
      >
        All Tech
      </FilterButton>
      
      {technologies.slice(0, maxVisible).map((tech) => (
        <FilterButton
          key={tech}
          isActive={selectedTechnology === tech}
          onClick={() => onTechnologyChange(tech)}
          variant="secondary"
        >
          {tech}
        </FilterButton>
      ))}
    </div>
  );
}
