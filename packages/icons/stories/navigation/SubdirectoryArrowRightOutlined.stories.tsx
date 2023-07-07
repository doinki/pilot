import type { Meta, StoryObj } from '@storybook/react';

import SubdirectoryArrowRightOutlined from '../../lib/navigation/SubdirectoryArrowRightOutlined';

const meta: Meta<typeof SubdirectoryArrowRightOutlined> = {
  component: SubdirectoryArrowRightOutlined,
  tags: ['autodocs'],
  title: 'navigation/SubdirectoryArrowRightOutlined',
};

export default meta;
type Story = StoryObj<typeof SubdirectoryArrowRightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
