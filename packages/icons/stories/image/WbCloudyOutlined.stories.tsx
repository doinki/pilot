import type { Meta, StoryObj } from '@storybook/react';

import WbCloudyOutlined from '../../lib/image/WbCloudyOutlined';

const meta: Meta<typeof WbCloudyOutlined> = {
  component: WbCloudyOutlined,
  tags: ['autodocs'],
  title: 'image/WbCloudyOutlined',
};

export default meta;
type Story = StoryObj<typeof WbCloudyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
