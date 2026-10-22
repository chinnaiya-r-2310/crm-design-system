import { useId } from 'react';
import type { FC, SVGProps } from 'react';
import catalog from './catalog/catalog.json';

// Inline text SVG sprites so masks also work offline and in browser tests.
import { sprites } from './catalog/sprites';
export const crmIconMetadata = Object.fromEntries(catalog.map(item => {
  const dimensions = item.kind === 'vector'
    ? item.viewBox!.trim().split(/\s+/).map(Number).slice(2)
    : [item.width!, item.height!];
  return [item.name, { keywords: item.keywords, source: item.source, width: dimensions[0], height: dimensions[1] }];
}));
export const crmIconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = Object.fromEntries(catalog.map(item => {
  function CatalogIcon(props: SVGProps<SVGSVGElement>) {
    const id = `crm-mask-${useId().replace(/:/g, '')}`;
    if (item.kind === 'vector') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} width={16} height={16} {...props} dangerouslySetInnerHTML={{ __html: item.markup! }} />;
    }
    if (item.kind === 'background') {
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${item.x} ${item.y} ${item.width} ${item.height}`} width={16} height={16} {...props}>
        <image href={sprites[item.asset!]} width={item.spriteWidth} height={item.spriteHeight} />
      </svg>;
    }
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${item.width} ${item.height}`} width={16} height={16} {...props}>
      <defs><mask id={id} maskUnits="userSpaceOnUse" x={0} y={0} width={item.width} height={item.height} style={{ maskType: 'alpha' }}>
        <image href={sprites[item.asset!]} x={-item.x!} y={-item.y!} width={item.spriteWidth} height={item.spriteHeight} />
      </mask></defs>
      <rect width={item.width} height={item.height} fill="currentColor" mask={`url(#${id})`} />
    </svg>;
  }
  CatalogIcon.displayName = item.name;
  return [item.name, CatalogIcon];
}));
