import type { Meta, StoryObj } from '@storybook/react';

import HorizontalDistributeOutlined from '../../lib/editor/HorizontalDistributeOutlined';

const meta: Meta<typeof HorizontalDistributeOutlined> = {
  component: HorizontalDistributeOutlined,
  tags: ['autodocs'],
  title: 'editor/HorizontalDistributeOutlined',
};

export default meta;
type Story = StoryObj<typeof HorizontalDistributeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
