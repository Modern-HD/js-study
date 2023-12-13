'use client';

import PageMotionWrapper from '@/components/provider/PageMotionWrapper';
import ToolBar from '@/components/toolbar/Toolbar';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import Image from 'next/image';
import { useState } from 'react';

export default function Photo() {
    const [imgPath, setImgPath] = useState<string>('');
    return (
        <>
            <PageMotionWrapper className="flex-1 flex flex-col items-center justify-between p-24">
                <p>사진 페이지</p>
                <button
                    onClick={() => {
                        if (Capacitor.isNativePlatform()) {
                            alert('네이티브 플랫폼 입니다.');
                        } else {
                            alert('네이티브 플랫폼이 아닙니다.');
                        }
                    }}
                >
                    네이티브 플랫폼 여부
                </button>
                <button
                    onClick={() => {
                        alert(`플랫폼: ${Capacitor.getPlatform()}`);
                    }}
                >
                    현재 플랫폼
                </button>
                {imgPath && (
                    <div className="text-center">
                        <Image loader={() => imgPath} src={imgPath} alt={''} width={200} height={200} />
                        <button>전송</button>
                    </div>
                )}
                <button
                    onClick={async () => {
                        try {
                            const image = await Camera.getPhoto({
                                quality: 90,
                                allowEditing: true,
                                resultType: CameraResultType.Uri,
                            });
                            image.webPath && setImgPath(image.webPath);
                        } catch (error) {
                            alert(error);
                        }
                    }}
                >
                    사진 가져오기
                </button>
            </PageMotionWrapper>
            <ToolBar />
        </>
    );
}
