import type { Meta, StoryObj } from '@storybook/react';

import LensOutlined from '../../lib/image/LensOutlined';

const meta: Meta<typeof LensOutlined> = {
  component: LensOutlined,
  tags: ['autodocs'],
  title: 'image/LensOutlined',
};

export default meta;
type Story = StoryObj<typeof LensOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
