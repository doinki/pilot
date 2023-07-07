import type { Meta, StoryObj } from '@storybook/react';

import CameraEnhanceOutlined from '../../lib/action/CameraEnhanceOutlined';

const meta: Meta<typeof CameraEnhanceOutlined> = {
  component: CameraEnhanceOutlined,
  tags: ['autodocs'],
  title: 'action/CameraEnhanceOutlined',
};

export default meta;
type Story = StoryObj<typeof CameraEnhanceOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
