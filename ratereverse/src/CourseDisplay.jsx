export default function CourseDisplay({ courseCode }) {
  const courseData = {
    'CS 310': {
      title: 'Data Structures & Algorithms',
      description: 'Learn about linked lists, trees, heaps, sorting, and more.',
    },
    'CS 320': {
      title: 'Programming Languages',
      description: 'Explore syntax, semantics, and language paradigms.',
    },
    'CS 370': {
      title: 'Software Engineering',
      description: 'Learn software lifecycle models and team-based development.',
    },
  };

  const course = courseData[courseCode.toUpperCase()];

  if (!course) return <p>No course found. Try CS 310, CS 320, or CS 370.</p>;

  return (
    <div className="course-display">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
}
