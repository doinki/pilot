import type { Meta, StoryObj } from '@storybook/react';

import PictureInPictureAltOutlined from '../../lib/action/PictureInPictureAltOutlined';

const meta: Meta<typeof PictureInPictureAltOutlined> = {
  component: PictureInPictureAltOutlined,
  tags: ['autodocs'],
  title: 'action/PictureInPictureAltOutlined',
};

export default meta;
type Story = StoryObj<typeof PictureInPictureAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
