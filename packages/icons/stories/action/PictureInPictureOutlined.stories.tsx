import type { Meta, StoryObj } from '@storybook/react';

import PictureInPictureOutlined from '../../lib/action/PictureInPictureOutlined';

const meta: Meta<typeof PictureInPictureOutlined> = {
  component: PictureInPictureOutlined,
  tags: ['autodocs'],
  title: 'action/PictureInPictureOutlined',
};

export default meta;
type Story = StoryObj<typeof PictureInPictureOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
