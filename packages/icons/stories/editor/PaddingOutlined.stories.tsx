import type { Meta, StoryObj } from '@storybook/react';

import PaddingOutlined from '../../lib/editor/PaddingOutlined';

const meta: Meta<typeof PaddingOutlined> = {
  component: PaddingOutlined,
  tags: ['autodocs'],
  title: 'editor/PaddingOutlined',
};

export default meta;
type Story = StoryObj<typeof PaddingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
