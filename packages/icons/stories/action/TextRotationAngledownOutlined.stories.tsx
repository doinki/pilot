import type { Meta, StoryObj } from '@storybook/react';

import TextRotationAngledownOutlined from '../../lib/action/TextRotationAngledownOutlined';

const meta: Meta<typeof TextRotationAngledownOutlined> = {
  component: TextRotationAngledownOutlined,
  tags: ['autodocs'],
  title: 'action/TextRotationAngledownOutlined',
};

export default meta;
type Story = StoryObj<typeof TextRotationAngledownOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
