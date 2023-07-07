import type { Meta, StoryObj } from '@storybook/react';

import SubdirectoryArrowLeftOutlined from '../../lib/navigation/SubdirectoryArrowLeftOutlined';

const meta: Meta<typeof SubdirectoryArrowLeftOutlined> = {
  component: SubdirectoryArrowLeftOutlined,
  tags: ['autodocs'],
  title: 'navigation/SubdirectoryArrowLeftOutlined',
};

export default meta;
type Story = StoryObj<typeof SubdirectoryArrowLeftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
