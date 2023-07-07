import type { Meta, StoryObj } from '@storybook/react';

import HeightOutlined from '../../lib/editor/HeightOutlined';

const meta: Meta<typeof HeightOutlined> = {
  component: HeightOutlined,
  tags: ['autodocs'],
  title: 'editor/HeightOutlined',
};

export default meta;
type Story = StoryObj<typeof HeightOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
