import Close from '../../assets/icons/icon_close.svg?react';
import Post from '../../assets/icons/icon_post.svg?react';
import { useState } from 'react';
import MDEditor, { commands } from '@uiw/react-md-editor';
import TroubleBox from '../../assets/icons/icon_trouble_box.svg?react';
import ProjectBox from '../../assets/icons/icon_project_box.svg?react';
import { CategoryToKorType } from '../../data/type';
import Down from '../../assets/icons/icon_arrow_down.svg?react';

const WriteContainer = ({ onClose }: { onClose: () => void }) => {
  const [value, setValue] = useState<string>('');
  const [category, setCategory] = useState<CategoryToKorType | null>(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string>('');
  // const [troubleStart, setTroubleStart] = useState<number[]>([]);
  // const [projectStart, setProjectStart] = useState<number[]>([]);

  // useEffect(() => {
  //   console.log('project start --> ', projectStart);
  //   console.log('프로젝트 시작 --> ', value.slice(projectStart[projectStart.length - 1]));
  //   console.log('trouble start --> ', troubleStart);
  // }, [projectStart, troubleStart]);
  const troubleInfo =
    '<!-- 새로운 트러블슈팅 내용을 주석 사이에 작성해주세요. 주석은 삭제 및 수정하지 마세요. -->';
  const projectInfo =
    '<!-- 새로운 프로젝트 내용을 주석 사이에 작성해주세요. 주석은 삭제 및 수정하지 마세요. -->';

  const handleSave = () => {
    console.log('저장 --> ', value);
    if (!category) {
      setError('카테고리를 선택해주세요.');
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
      return;
    }
  };

  const troubleShootingBox = {
    name: 'troubleShootingBox',
    keyCommand: 'troubleShootingBox',
    buttonProps: { 'aria-label': 'Insert Trouble Shooting Box' },
    icon: <TroubleBox className="h-[18px] w-auto" />,
    execute: (
      state: { selectedText: string; text: string },
      api: { replaceSelection: (arg0: string) => void },
    ) => {
      // let currentTrouble = state.text.length - state.selectedText.length;
      let modifyText = `${troubleInfo}\n## 트러블 슈팅 #N : ${state.selectedText}\n내용을 입력해주세요.\n${troubleInfo}\n\n`;
      // let modifyText = `> **트러블 슈팅 #N : ${state.selectedText}**\n내용을 입력해주세요.\n해당 인용문 안에 적힌 내용에 한해 트러블 슈팅 카테고리에 자동 등록됩니다.\n\n`;
      if (!state.selectedText) {
        modifyText = `${troubleInfo}\n## 트러블 슈팅 #N : 제목\n내용을 입력해주세요.\n${troubleInfo}\n\n`;
        // currentTrouble = state.text.length;
      }
      // setTroubleStart([...troubleStart, currentTrouble]);
      api.replaceSelection(modifyText);
    },
  };

  const projectBox = {
    name: 'projectBox',
    keyCommand: 'projectBox',
    buttonProps: { 'aria-label': 'Insert Project Box' },
    icon: <ProjectBox className="h-[18px] w-auto" />,
    execute: (
      state: { selectedText: string; text: string },
      api: { replaceSelection: (arg0: string) => void },
    ) => {
      // let currentProject = state.text.length - state.selectedText.length;
      let modifyText = `${projectInfo}\n## 프로젝트 #N : ${state.selectedText}\n내용을 입력해주세요.\n${troubleInfo}\n\n`;
      // let modifyText = `> **프로젝트 #N : ${state.selectedText}**\n내용을 입력해주세요.\n해당 인용문 안에 적힌 내용에 한해 프로젝트 카테고리에 자동 등록됩니다.\n\n`;
      if (!state.selectedText) {
        modifyText = `${projectInfo}\n## 프로젝트 #N : 제목\n내용을 입력해주세요.\n${projectInfo}\n\n`;
        // currentProject = state.text.length;
      }
      api.replaceSelection(modifyText);
      // setProjectStart([...projectStart, currentProject]);
    },
  };

  return (
    <>
      <div
        className="w-4/5 h-5/6 flex flex-col items-center justify-start rounded-modal bg-white shadow-md relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="w-full shrink-0 flex items-center justify-between px-16 py-13 border-b border-gray-200 h-[75px] top-0 absolute bg-white rounded-t-modal">
          <div
            className="flex items-center justify-center px-16 py-8 cursor-pointer gap-x-4 rounded-md border border-dark-300"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <div className="w-[100px] text-center font-semibold">
              {category ? category : '카테고리 선택'}
            </div>
            <Down
              className={`transition-all ease-in-out duration-300 ${isCategoryOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
          <div className="flex items-center justify-center gap-x-16">
            <button
              className="flex items-center justify-center gap-x-4 py-8 px-16 bg-main text-white border-none outline-none focus:border-none focus:outline-none active:border-none active:outline-none hover:bg-dark-300"
              onClick={handleSave}
            >
              <Post className="h-[24px] w-auto" />
              <div>발행</div>
            </button>
            <Close onClick={onClose} className="cursor-pointer" />
          </div>
        </div>
        <div
          className={`absolute top-[62px] left-4 flex flex-col items-center justify-start z-10 px-36 py-12 rounded-lg shadow-lg bg-white gap-y-12 ${!isCategoryOpen && 'hidden'}`}
        >
          <div
            className={`${category === '대외활동' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
            onClick={() => {
              setCategory('대외활동');
              setIsCategoryOpen(false);
            }}
          >
            {'대외활동' as CategoryToKorType}
          </div>
          <div
            className={`${category === '프로젝트' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
            onClick={() => {
              setCategory('프로젝트');
              setIsCategoryOpen(false);
            }}
          >
            {'프로젝트' as CategoryToKorType}
          </div>
          <div
            className={`${category === '수상이력' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
            onClick={() => {
              setCategory('수상이력');
              setIsCategoryOpen(false);
            }}
          >
            {'수상이력' as CategoryToKorType}
          </div>
          <div
            className={`${category === '트러블슈팅' ? 'text-gray-800' : 'text-gray-300'} font-medium cursor-pointer`}
            onClick={() => {
              setCategory('트러블슈팅');
              setIsCategoryOpen(false);
            }}
          >
            {'트러블슈팅' as CategoryToKorType}
          </div>
        </div>
        <div
          data-color-mode="light"
          className="container w-full h-[calc(100%-75px)] flex-1 px-16 py-16 flex flex-col items-center justify-start absolute top-[75px]"
        >
          <MDEditor
            style={{ width: '100%', height: '100%', minHeight: '100%', whiteSpace: 'pre-wrap' }}
            value={value}
            onChange={(e) => setValue(e || '')}
            commands={[
              commands.bold,
              commands.italic,
              commands.strikethrough,
              commands.hr,
              commands.divider,
              commands.link,
              commands.quote,
              commands.code,
              commands.codeBlock,
              commands.comment,
              commands.image,
              commands.table,
              commands.divider,
              commands.unorderedListCommand,
              commands.orderedListCommand,
              commands.checkedListCommand,
              commands.divider,
              troubleShootingBox,
              projectBox,
              commands.divider,
              commands.help,
            ]}
          />
        </div>
      </div>
      <div
        className={`fixed min-w-[300px] bottom-40 rounded-md bg-main text-white py-8 px-24 text-center ${isError ? 'translate-y-0' : 'translate-y-60'} transition-transform ease-in-out duration-300 z-50`}
      >
        {error}
      </div>
    </>
  );
};

export default WriteContainer;
