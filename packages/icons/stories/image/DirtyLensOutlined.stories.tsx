import type { Meta, StoryObj } from '@storybook/react';

import DirtyLensOutlined from '../../lib/image/DirtyLensOutlined';

const meta: Meta<typeof DirtyLensOutlined> = {
  component: DirtyLensOutlined,
  tags: ['autodocs'],
  title: 'image/DirtyLensOutlined',
};

export default meta;
type Story = StoryObj<typeof DirtyLensOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
