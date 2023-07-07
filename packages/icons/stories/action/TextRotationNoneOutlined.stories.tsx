import type { Meta, StoryObj } from '@storybook/react';

import TextRotationNoneOutlined from '../../lib/action/TextRotationNoneOutlined';

const meta: Meta<typeof TextRotationNoneOutlined> = {
  component: TextRotationNoneOutlined,
  tags: ['autodocs'],
  title: 'action/TextRotationNoneOutlined',
};

export default meta;
type Story = StoryObj<typeof TextRotationNoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
