/**
 * PageList Component
 * 
 * This component renders a list of pages based on configuration files found in the specified directory.
 * It searches for configuration files in the subdirectories of the given directory, sorts the results
 * based on the 'order' property, and displays them in a grid format.
 * 
 * @param {string} title - The title of the page list.
 * @param {string} dir - The absolute path of the directory to search for configuration files.
 * @param {string} [configFileName='pageRef.json'] - The name of the configuration file. Defaults to 'pageRef.json'.
 * 
 * @returns {JSX.Element} The rendered PageList component.
 * 
 * Configuration File Format:
 * The configuration file is expected to be in JSON format with the following structure:
 * {
 *   "content": string,
 *   "image": string,
 *   "title": string,
 *   "link": string,
 *   "order": number
 * }
 * 
 * Example Usage:
 * <PageList title="My Page List" dir="/path/to/directory" configFileName="myConfig.json" />
 * 
 * The component will:
 * - Search for configuration files in the immediate subdirectories of the specified directory.
 * - Optionally, search recursively if the recursive option is enabled.
 * - Parse the configuration files and extract the required fields.
 * - Sort the results based on the 'order' property.
 * - Render the sorted results in a grid format.
 */
import { findConfigFiles} from '@/utils/findConfigFiles'; // Adjust the path as needed
import { ConfigFilesData, LayoutComponent } from './interfaces/interfaces';


interface PageListProps {
    title: string;
    dir: string;
    configFileName?: string;
    recursive?: boolean; // Optional prop to enable recursive search
    LayoutComponent: React.FC<LayoutComponent>;
}

const PageList: React.FC<PageListProps> = ({ title, dir, configFileName='pageRef.json',recursive=false,LayoutComponent }) => {

    const workinDir = process.cwd() + "/app/" + dir;

    const results: ConfigFilesData[] = findConfigFiles(workinDir, configFileName, recursive); // Fetch configuration files
console.log('results', results);
    const sortedResults = results.sort((a, b) => {
        if ('order' in a && 'order' in b) {
            return a.order - b.order;
        }
        return 0;
    });


    return (
        <>
        <LayoutComponent results={sortedResults} title={title} />
        </>

    );



}

export default PageList;
