import type { Meta, StoryObj } from '@storybook/react';

import PictureAsPdfOutlined from '../../lib/image/PictureAsPdfOutlined';

const meta: Meta<typeof PictureAsPdfOutlined> = {
  component: PictureAsPdfOutlined,
  tags: ['autodocs'],
  title: 'image/PictureAsPdfOutlined',
};

export default meta;
type Story = StoryObj<typeof PictureAsPdfOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
