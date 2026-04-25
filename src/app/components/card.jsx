export default function Card({ children, className = "" }) {
    return (
        <div className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-md dark:hover:shadow-gray-900 transition-shadow duration-200 ${className}`}>
            {children}
        </div>
    );
}
