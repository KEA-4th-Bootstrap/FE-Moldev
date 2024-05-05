import { useEffect, useRef, useState } from 'react';
import { ArticleListItemType, CategoryType, ItemDimensions } from '../../data/type';
import { dummyActivity, dummyAwards, dummyProject, dummyTrouble } from '../../data/dummy';
import ListItemContainer from './ListItemContainer';
import { MissionControl } from './MissionControl';
import { useParams } from 'react-router';

const ListWrapper = ({ category }: { category: CategoryType }) => {
  const { moldevId } = useParams();
  const [listItems, setListItems] = useState<ArticleListItemType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [itemDimensions, setItemDimensions] = useState<ItemDimensions[][]>([]);

  useEffect(() => {
    console.log('list wrapper moldevId', moldevId);
  }, [moldevId]);

  useEffect(() => {
    if (!outerRef.current) return;
    // outerRef size
    const { width, height } = outerRef.current.getBoundingClientRect();
    console.log('outerRef', outerRef.current.className);
    console.log('outerRef', width, height);
    setWidth(width);
    setHeight(height);
  }, [outerRef, outerRef.current?.onresize]);

  useEffect(() => {
    if (!width || !height) return;

    const itemDimensions = MissionControl(width, height, 5, 32);
    console.log('itemDimensions', itemDimensions);
    setItemDimensions(itemDimensions);
  }, [width, height, listItems]);

  useEffect(() => {
    switch (category) {
      case 'activity':
        setListItems(dummyActivity);
        break;
      case 'project':
        setListItems(dummyProject);
        break;
      case 'awards':
        setListItems(dummyAwards);
        break;
      case 'trouble':
        setListItems(dummyTrouble);
        break;
      default:
        setListItems([]);
    }
  }, [category]);

  return (
    <div className="w-full grow flex flex-col justify-center items-center">
      <div
        ref={outerRef}
        className="w-2/3 grow flex flex-col items-center justify-center gap-y-30 py-80"
      >
        {listItems.length > 0 && itemDimensions.length > 0 && (
          <>
            <div className="w-full flex items-end justify-center gap-x-30">
              {listItems.slice(0, itemDimensions[0].length).map((item, index) => (
                <ListItemContainer
                  key={item.id}
                  item={item}
                  moldevId={moldevId || ''}
                  width={itemDimensions[0][index].width}
                  height={itemDimensions[0][index].height}
                />
              ))}
            </div>
            <div className="w-full flex items-start justify-center gap-x-30">
              {listItems.slice(itemDimensions[0].length, 5).map((item, index) => (
                <ListItemContainer
                  key={item.id}
                  item={item}
                  moldevId={moldevId || ''}
                  width={itemDimensions[1][index].width}
                  height={itemDimensions[1][index].height}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div
        className="flex items-center justify-center gap-x-32 grow shrink-0"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 1}>
          이전
        </button>
        <button
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={currentIndex * 5 >= listItems.length}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default ListWrapper;
