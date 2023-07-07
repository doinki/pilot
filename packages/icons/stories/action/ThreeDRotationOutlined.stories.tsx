import type { Meta, StoryObj } from '@storybook/react';

import ThreeDRotationOutlined from '../../lib/action/ThreeDRotationOutlined';

const meta: Meta<typeof ThreeDRotationOutlined> = {
  component: ThreeDRotationOutlined,
  tags: ['autodocs'],
  title: 'action/ThreeDRotationOutlined',
};

export default meta;
type Story = StoryObj<typeof ThreeDRotationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
