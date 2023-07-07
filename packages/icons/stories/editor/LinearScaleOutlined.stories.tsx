import type { Meta, StoryObj } from '@storybook/react';

import LinearScaleOutlined from '../../lib/editor/LinearScaleOutlined';

const meta: Meta<typeof LinearScaleOutlined> = {
  component: LinearScaleOutlined,
  tags: ['autodocs'],
  title: 'editor/LinearScaleOutlined',
};

export default meta;
type Story = StoryObj<typeof LinearScaleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
