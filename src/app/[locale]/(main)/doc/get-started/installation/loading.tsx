import './styles.css';

import SkeletonLoader from '@/components/atom/SkeletonLoader';

export default function Loading() {
  return (
    <div className="doc-page-loading">
      <SkeletonLoader type="short-line" />
      <SkeletonLoader type="line" className="mb-8" />
      <SkeletonLoader type="paragraph" className="mb-8" />
      <SkeletonLoader type="text" className="mb-8" />
      <SkeletonLoader type="paragraph" className="mb-8" />
      <SkeletonLoader type="text" className="mb-8" />
      <SkeletonLoader type="paragraph" className="mb-8" />
      <SkeletonLoader type="text" className="mb-8" />
      <SkeletonLoader type="paragraph" className="mb-8" />
      <SkeletonLoader type="text" className="mb-8" />
    </div>
  );
}
