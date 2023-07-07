import type { Meta, StoryObj } from '@storybook/react';

import VerticalDistributeOutlined from '../../lib/editor/VerticalDistributeOutlined';

const meta: Meta<typeof VerticalDistributeOutlined> = {
  component: VerticalDistributeOutlined,
  tags: ['autodocs'],
  title: 'editor/VerticalDistributeOutlined',
};

export default meta;
type Story = StoryObj<typeof VerticalDistributeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
