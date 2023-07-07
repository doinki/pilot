import type { Meta, StoryObj } from '@storybook/react';

import AssistantPhotoOutlined from '../../lib/image/AssistantPhotoOutlined';

const meta: Meta<typeof AssistantPhotoOutlined> = {
  component: AssistantPhotoOutlined,
  tags: ['autodocs'],
  title: 'image/AssistantPhotoOutlined',
};

export default meta;
type Story = StoryObj<typeof AssistantPhotoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
