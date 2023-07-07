import type { Meta, StoryObj } from '@storybook/react';

import TextRotationAngleupOutlined from '../../lib/action/TextRotationAngleupOutlined';

const meta: Meta<typeof TextRotationAngleupOutlined> = {
  component: TextRotationAngleupOutlined,
  tags: ['autodocs'],
  title: 'action/TextRotationAngleupOutlined',
};

export default meta;
type Story = StoryObj<typeof TextRotationAngleupOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
