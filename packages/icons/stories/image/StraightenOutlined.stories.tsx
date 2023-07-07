import type { Meta, StoryObj } from '@storybook/react';

import StraightenOutlined from '../../lib/image/StraightenOutlined';

const meta: Meta<typeof StraightenOutlined> = {
  component: StraightenOutlined,
  tags: ['autodocs'],
  title: 'image/StraightenOutlined',
};

export default meta;
type Story = StoryObj<typeof StraightenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
